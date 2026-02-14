export const checkBreach = async (searchTerm) => {
  try {
    const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${searchTerm}%20data%20breach&format=json&origin=*`;
    const response = await fetch(url);
    const data = await response.json();

    return data.query.search.map(result => {
      const cleanDescription = new DOMParser()
        .parseFromString(result.snippet, 'text/html')
        .body.textContent || "";

      return {
        Title: result.title,
        Description: cleanDescription + "...",
        DataClasses: ["Public Record", "Security News"]
      };
    }).slice(0, 5);
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
};
