interface ProjectProps {
    result: Array<{}>,
    setResult: React.Dispatch<React.SetStateAction<Array<{}>>>,
    index: number
}

function ProjectStage(props: ProjectProps) {
    function updateResult() {
        props.setResult(result => {
            result[props.index] = { hello: 'hello' }
            return [...result];
        })
    }

    return (
        <button onClick={updateResult}>Project</button>
    )
}

export default ProjectStage;