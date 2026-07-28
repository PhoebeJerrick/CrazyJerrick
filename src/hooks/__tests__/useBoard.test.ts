import { normalizeStoredBoardArray } from "../useBoard";
import { INITIAL_LAYOUT, INITIAL_WIDGETS } from "../../constants/initials";

describe("normalizeStoredBoardArray", () => {
    it("falls back to the initial layout when stored data is missing", () => {
        expect(normalizeStoredBoardArray(null, INITIAL_LAYOUT)).toEqual(
            INITIAL_LAYOUT
        );
    });

    it("keeps an empty array when the stored data is explicitly empty", () => {
        expect(normalizeStoredBoardArray([], INITIAL_WIDGETS)).toEqual([]);
    });
});
