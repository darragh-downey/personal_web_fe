
export default function AuthorSig({ props }) {
    return (
        <div class="flex items-center">
            <img class="w-10 h-10 rounded-full mr-4" src={props.imgSrc} alt={`Avatar of ${props.authorName}`} />
            <div class="text-sm">
                <p class="text-gray-900 leading-none">{props.authorName}</p>
                <p class="text-gray-600">{props.date}</p>
            </div>
        </div>
    )
}