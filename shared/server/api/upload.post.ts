import { defineEventHandler, readMultipartFormData } from 'h3'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { useFirebase } from '../../composables/useFirebase'

export default defineEventHandler(async (event) => {
  try {
    const formData = await readMultipartFormData(event)
    if (!formData || !formData[0]) {
      throw new Error('No file provided')
    }

    const file = formData[0]
    if (!file.filename || !file.data) {
      throw new Error('Invalid file data')
    }

    // Initialize Firebase Storage
    const { app } = useFirebase()
    const storage = getStorage(app)

    // Generate a unique filename
    const timestamp = Date.now()
    const uniqueFilename = `${timestamp}-${file.filename}`
    const filePath = `uploads/${uniqueFilename}`

    // Create a storage reference
    const storageRef = ref(storage, filePath)

    // Upload the file
    const snapshot = await uploadBytes(storageRef, file.data, {
      contentType: file.type,
    })

    // Get the download URL
    const downloadURL = await getDownloadURL(snapshot.ref)

    return {
      url: downloadURL,
      path: filePath,
      name: file.filename,
      type: file.type,
      size: file.data.length,
    }
  } catch (error) {
    console.error('Error uploading file:', error)
    throw createError({
      statusCode: 500,
      message: error.message || 'Failed to upload file',
    })
  }
})
