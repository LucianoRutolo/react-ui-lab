import type React from "react";

/** Un option del array puede ser un objeto {label, value} o un valor plano */
type OptionItem =
  | {
      label: string;
      value: string | number;
    }
  | string
  | number;

/** Objeto donde cada clave es el value y cada valor es el label mostrado */
type OptionsRecord = Record<string, string | number>;

type Options = OptionItem[] | OptionsRecord;

interface SelectProps extends Omit<
  React.ComponentPropsWithoutRef<"select">,
  "children"
> {
  options: Options;
}

interface NormalizedOption {
  key: string;
  label: string;
  value: string | number;
}

function normalizeOptions(options: Options): NormalizedOption[] {
  if (Array.isArray(options)) {
    return options.map((option) => {
      if (typeof option === "object") {
        return {
          key: String(option.value),
          label: option.label,
          value: option.value,
        };
      }
      // string | number: el valor mostrado y el value son el mismo dato
      return {
        key: String(option),
        label: String(option),
        value: option,
      };
    });
  }

  // Objeto: { value: label }
  return Object.entries(options).map(([value, label]) => ({
    key: value,
    label: String(label),
    value,
  }));
}

export const Select = ({ options, ...props }: SelectProps) => {
  const normalized = normalizeOptions(options);

  return (
    <select
      className="border border-gray-300 hover:border-gray-500 rounded-sm cursor-pointer p-1 transition-colors"
      {...props}
    >
      {normalized.map((option) => (
        <option
          key={option.key}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
};
