import { lawyerConfig } from "../config/lawyerConfig";

/**
 * Cria URL do WhatsApp de acordo com as regras de sanitização do Brasil:
 * https://wa.me/55DDDNÚMERO?text=...
 */
export function buildWhatsAppUrl(message: string): string {
  const digitsOnly = lawyerConfig.phoneRaw.replace(/\D/g, "");
  return `https://wa.me/${digitsOnly}?text=${encodeURIComponent(message)}`;
}

/**
 * Copia texto para a área de transferência com fallback
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  if (navigator?.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // fallback abaixo
    }
  }

  try {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    textArea.style.top = "-9999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    const successful = document.execCommand("copy");
    document.body.removeChild(textArea);
    return successful;
  } catch {
    return false;
  }
}
