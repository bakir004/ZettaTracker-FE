import { faFileWord } from '@fortawesome/free-solid-svg-icons'
import { faFileImage } from '@fortawesome/free-solid-svg-icons'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { faFilePowerpoint } from '@fortawesome/free-solid-svg-icons'
import { faFileVideo } from '@fortawesome/free-solid-svg-icons'
import { faFileCode } from '@fortawesome/free-solid-svg-icons'
import { faFileAudio } from '@fortawesome/free-solid-svg-icons'
import { faFileExcel } from '@fortawesome/free-solid-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { faFileArchive } from '@fortawesome/free-solid-svg-icons'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'

export const getIcon = (extension) => {
    switch(extension) {
        case "webp":
        case "gif":
        case "jpg":
        case "png": {
            return faFileImage
        }
        case "doc":
        case "rtf":
        case "docx": {
            return faFileWord
        }
        case "pptx":
        case "ppt": {
            return faFilePowerpoint
        }
        case "xlsx": {
            return faFileExcel
        }
        case "zip": {
            return faFileArchive
        }
        case "mp4": {
            return faFileVideo
        }
        case "pdf": {
            return faFilePdf
        }
        case "js": 
        case "cpp": 
        case "c": 
        case "ruby": 
        case "php": 
        case "css": 
        case "html": 
        case "ts": 
        case "tsx": 
        case "py": 
        case "scss": 
        case "json": 
        case "md": {
            return faFileCode
        }
        case "txt": {
            return faFile
        }
        case "mp3":
        case "wav": {
            return faFileAudio
        }
        default: {
            return faFileAlt
        }
    }
}