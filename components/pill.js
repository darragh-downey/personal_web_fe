
export default function Pill(props) {
    return <span id={props.pillKey} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{props.pillString}</span>
}