import { atomWithStorage } from "jotai/utils";

export const counterAtom = atomWithStorage<number>("counter", 0);
