
export function getNoteContentById(noteID : string | null) {
    if (typeof window === "undefined" || !noteID) {
        return null;
    }
    // const searchParams = new URLSearchParams(window.location.search);
    // const noteID = searchParams.get('id');

    const db = JSON.parse(localStorage.getItem("localDatabase") || "{}");

    if(!db) { return null;}
    const note = db?.["notesList"]?.[noteID] || null;

    return note;
}
