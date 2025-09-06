export const MIME_TYPES = {
    // Imagens
    images: [
        'image/jpeg',
        'image/jpg',
        'image/png',
        'image/gif',
        'image/bmp',
        'image/webp',
        'image/svg+xml',
        'image/tiff',
        'image/x-icon',
    ],

    // Vídeos
    videos: [
        'video/mp4',
        'video/avi',
        'video/mov',
        'video/wmv',
        'video/flv',
        'video/webm',
        'video/mkv',
        'video/3gp',
    ],

    // Áudios
    audios: [
        'audio/mp3',
        'audio/wav',
        'audio/ogg',
        'audio/aac',
        'audio/flac',
        'audio/m4a',
        'audio/wma',
    ],

    // Documentos
    documents: [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'application/vnd.ms-powerpoint',
        'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    ],

    // Texto
    text: [
        'text/plain',
        'text/csv',
        'text/html',
        'text/css',
        'text/javascript',
        'application/json',
        'application/xml',
    ],

    // Compactados
    compressed: [
        'application/zip',
        'application/x-rar-compressed',
        'application/x-7z-compressed',
        'application/gzip',
    ],
}

export const FILE_EXTENSIONS = {
    // Imagens
    images: ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp', '.svg', '.tiff', '.ico'],

    // Vídeos
    videos: ['.mp4', '.avi', '.mov', '.wmv', '.flv', '.webm', '.mkv', '.3gp'],

    // Áudios
    audios: ['.mp3', '.wav', '.ogg', '.aac', '.flac', '.m4a', '.wma'],

    // Documentos
    documents: ['.pdf', '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx'],

    // Texto
    text: ['.txt', '.csv', '.json', '.xml', '.html', '.css', '.js'],

    // Compactados
    compressed: ['.zip', '.rar', '.7z', '.gz'],
}

export const ALL_MIME_TYPES = Object.values(MIME_TYPES).flat()

export const ALL_FILE_EXTENSIONS = Object.values(FILE_EXTENSIONS).flat()

export const extensionsToMimeTypes = extensions => {
    const mimeTypes = []

    const normalizedExtensions = extensions.map(ext => (ext.startsWith('.') ? ext : `.${ext}`))

    normalizedExtensions.forEach(extension => {
        Object.entries(FILE_EXTENSIONS).forEach(([category, exts]) => {
            const index = exts.indexOf(extension)

            if (index !== -1) {
                const mimeType = MIME_TYPES[category][index]

                if (mimeType && !mimeTypes.includes(mimeType)) {
                    mimeTypes.push(mimeType)
                }
            }
        })
    })

    return mimeTypes
}
