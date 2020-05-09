import Date from './date'

export default function AuthorSig({ imgSrc, authorName, date }) {
    return (
        <div class="flex items-center">
            <img class="w-10 h-10 rounded-full mr-4" src={`${imgSrc}`} alt={`Avatar of ${authorName}`} />
            <div class="text-sm">
                <p class="text-gray-900 leading-none">{authorName}</p>
                <p class="text-gray-600">
                    <Date dateString={date} />
                </p>
            </div>
        </div>
    )
}