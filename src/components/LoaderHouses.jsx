export const LoaderHouses = async () => {
    try {
      const response = await fetch(
        "https://potterapi-fedeperin.vercel.app/es/houses"
      );
  
      if (!response.ok) {
        throw new Error("Error al cargar los personajes");
      }
  
      const houses = await response.json();
      return { houses };
    } catch (error) {
      console.error(error);
      return { houses: [] }; // Retorna un array vacío en caso de error
    }
  };