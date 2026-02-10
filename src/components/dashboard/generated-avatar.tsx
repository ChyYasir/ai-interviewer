import { createAvatar } from "@dicebear/core";
import { initials } from "@dicebear/collection";

export function generateAvatarUrl(name: string): string {
  const avatar = createAvatar(initials, {
    seed: name,
    backgroundColor: ["c0aede", "d1d4f9", "ffd5dc", "ffdfbf"],
  });

  return avatar.toDataUri();
}
