const cleanText = (rawText) => {
  const doc = new DOMParser().parseFromString(rawText, 'text/html');
  return doc.body.textContent || "";
};

export const checkBreach = async (searchTerm) => {
  try {
    const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${searchTerm}%20data%20breach&format=json&origin=*`;
    const response = await fetch(url);
    const data = await response.json();

    return data.query.search.map(result => ({
      Title: result.title,
      Description: cleanText(result.snippet) + "...",
      DataClasses: ["Security Record", "Wiki Source"]
    })).slice(0, 5);
  } catch (error) {
    return [];
  }
};