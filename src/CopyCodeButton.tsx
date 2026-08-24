import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CopyCodeButtonProps {
  code: string;
  className?: string;
}

export const CopyCodeButton = ({ code, className }: CopyCodeButtonProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("No se pudo copiar el código:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`flex items-center rounded-md border p-2 text-sm text-gray-100 hover:text-black cursor-pointer hover:bg-gray-100 ${className}`}
    >
      {copied ? (
          <Check className="size-5" />
      ) : (
          <Copy className="size-5" />
      )}
    </button>
  );
};
