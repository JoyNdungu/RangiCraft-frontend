import api from './api'

// Save a palette
export const savePalette = async (paletteData) => {
  const response = await api.post('/palettes', paletteData)
  return response.data
}

// Get all saved palettes
export const getSavedPalettes = async () => {
  const response = await api.get('/palettes')
  return response.data
}

// Delete a palette
export const deletePalette = async (id) => {
  const response = await api.delete(`/palettes/${id}`)
  return response.data
}