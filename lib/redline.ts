export type DiffToken = {
  type: "equal" | "add" | "remove";
  value: string;
};

export type DiffSegment =
  | {
      type: "equal";
      text: string;
    }
  | {
      type: "add" | "remove";
      text: string;
    }
  | {
      type: "modify";
      oldText: string;
      newText: string;
    };

export type DiffSummary = {
  totalChanges: number;
  additions: number;
  deletions: number;
  modifications: number;
};

const TOKEN_REGEX = /(\s+|[A-Za-z0-9]+|[^\sA-Za-z0-9])/g;

function tokenize(text: string) {
  return text.match(TOKEN_REGEX) ?? [];
}

function buildLcsMatrix(a: string[], b: string[]) {
  const matrix = Array.from({ length: a.length + 1 }, () => Array<number>(b.length + 1).fill(0));

  for (let i = a.length - 1; i >= 0; i -= 1) {
    for (let j = b.length - 1; j >= 0; j -= 1) {
      if (a[i] === b[j]) {
        matrix[i][j] = matrix[i + 1][j + 1] + 1;
      } else {
        matrix[i][j] = Math.max(matrix[i + 1][j], matrix[i][j + 1]);
      }
    }
  }

  return matrix;
}

function diffTokens(original: string[], revised: string[]): DiffToken[] {
  const matrix = buildLcsMatrix(original, revised);
  const result: DiffToken[] = [];
  let i = 0;
  let j = 0;

  while (i < original.length && j < revised.length) {
    if (original[i] === revised[j]) {
      result.push({ type: "equal", value: original[i] });
      i += 1;
      j += 1;
      continue;
    }

    if (matrix[i + 1][j] >= matrix[i][j + 1]) {
      result.push({ type: "remove", value: original[i] });
      i += 1;
    } else {
      result.push({ type: "add", value: revised[j] });
      j += 1;
    }
  }

  while (i < original.length) {
    result.push({ type: "remove", value: original[i] });
    i += 1;
  }

  while (j < revised.length) {
    result.push({ type: "add", value: revised[j] });
    j += 1;
  }

  return result;
}

function collectText(tokens: DiffToken[], type: "remove" | "add", startIndex: number) {
  const values: string[] = [];
  let index = startIndex;

  while (index < tokens.length && tokens[index].type === type) {
    values.push(tokens[index].value);
    index += 1;
  }

  return {
    text: values.join(""),
    nextIndex: index,
  };
}

export function buildDiffSegments(originalText: string, revisedText: string): DiffSegment[] {
  const originalTokens = tokenize(originalText);
  const revisedTokens = tokenize(revisedText);
  const tokens = diffTokens(originalTokens, revisedTokens);
  const segments: DiffSegment[] = [];

  let index = 0;
  while (index < tokens.length) {
    const current = tokens[index];

    if (current.type === "equal") {
      const values: string[] = [];
      while (index < tokens.length && tokens[index].type === "equal") {
        values.push(tokens[index].value);
        index += 1;
      }
      segments.push({ type: "equal", text: values.join("") });
      continue;
    }

    if (current.type === "remove" && tokens[index + 1]?.type === "add") {
      const removed = collectText(tokens, "remove", index);
      const added = collectText(tokens, "add", removed.nextIndex);
      segments.push({
        type: "modify",
        oldText: removed.text,
        newText: added.text,
      });
      index = added.nextIndex;
      continue;
    }

    if (current.type === "add" && tokens[index + 1]?.type === "remove") {
      const added = collectText(tokens, "add", index);
      const removed = collectText(tokens, "remove", added.nextIndex);
      segments.push({
        type: "modify",
        oldText: removed.text,
        newText: added.text,
      });
      index = removed.nextIndex;
      continue;
    }

    const collected = collectText(tokens, current.type, index);
    segments.push({
      type: current.type,
      text: collected.text,
    });
    index = collected.nextIndex;
  }

  return segments;
}

export function summarizeDiff(segments: DiffSegment[]): DiffSummary {
  return segments.reduce<DiffSummary>(
    (summary, segment) => {
      if (segment.type === "add") {
        summary.additions += 1;
        summary.totalChanges += 1;
      }

      if (segment.type === "remove") {
        summary.deletions += 1;
        summary.totalChanges += 1;
      }

      if (segment.type === "modify") {
        summary.modifications += 1;
        summary.totalChanges += 1;
      }

      return summary;
    },
    {
      totalChanges: 0,
      additions: 0,
      deletions: 0,
      modifications: 0,
    },
  );
}

export function countWords(text: string) {
  const trimmed = text.trim();
  if (!trimmed) {
    return 0;
  }

  return trimmed.split(/\s+/).length;
}

export function countCharacters(text: string) {
  return text.length;
}

export function toPlaintextDiff(segments: DiffSegment[]) {
  return segments
    .map((segment) => {
      if (segment.type === "equal") {
        return segment.text;
      }

      if (segment.type === "add") {
        return `[Added] ${segment.text}`;
      }

      if (segment.type === "remove") {
        return `[Removed] ${segment.text}`;
      }

      return `[Modified] ${segment.oldText} -> ${segment.newText}`;
    })
    .join("");
}
