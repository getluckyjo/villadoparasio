// ─────────────────────────────────────────────────────────────
// SITE CONFIG — edit these in one place.
//
// ⚠️ WHATSAPP_NUMBER is a PLACEHOLDER. Replace with the real
// Vila do Paraíso WhatsApp number in full international format,
// digits only (no "+", spaces or dashes). Mozambique = country
// code 258, e.g. "258840000000".
// ─────────────────────────────────────────────────────────────
export const WHATSAPP_NUMBER = "258840000000"; // TODO: replace with the real number
export const EMAIL = "stay@viladoparaiso.com"; // TODO: confirm the real inbox

const DEFAULT_MSG = "Hi Vila do Paraíso, I'd love to plan a stay — could you help with dates and rates?";

/** Build a wa.me deep link with an optional pre-filled message. */
export function waLink(message: string = DEFAULT_MSG): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Build a mailto link with subject + body. */
export function mailLink(subject = "Enquiry — Vila do Paraíso", body = ""): string {
  const params = new URLSearchParams({ subject, ...(body ? { body } : {}) });
  return `mailto:${EMAIL}?${params.toString()}`;
}
