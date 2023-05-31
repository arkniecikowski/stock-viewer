// Funkcja zwracająca dzisiejszą datę w formacie "YYYY-MM-DD"
export function getTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  
  // Funkcja zwracająca datę z rokiem wcześniej w formacie "YYYY-MM-DD"
  export function getStartDate() {
    const today = new Date();
    const year = today.getFullYear() - 1;
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }