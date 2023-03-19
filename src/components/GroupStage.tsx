interface GroupProps {
    result: Array<{}>,
    setResult: React.Dispatch<React.SetStateAction<Array<{}>>>,
    index: number
}

function GroupStage(props: GroupProps) {
    return (
        <div>Group</div>
    )
}

export default GroupStage;