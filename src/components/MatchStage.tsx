interface MatchStage {
    result: Array<{}>,
    setResult: React.Dispatch<React.SetStateAction<Array<{}>>>,
    index: number
}

function MatchStage(props: MatchStage) {
    return (
        <div>Match</div>
    )
}

export default MatchStage;