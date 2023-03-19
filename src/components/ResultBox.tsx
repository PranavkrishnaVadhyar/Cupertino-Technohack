function ResultBox (props: { value: Array<{}> }) {
    return (
        <textarea name="result" id="result" value={JSON.stringify(props.value)} readOnly></textarea>
    )
}

export default ResultBox