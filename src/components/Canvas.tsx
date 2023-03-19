import React, { ReactNode, useState } from 'react';
import ProjectStage from './ProjectStage';
import MatchStage from './MatchStage';
import GroupStage from './GroupStage';

interface CanvasProps {
    pipeline: string[],
    setPipeline: React.Dispatch<React.SetStateAction<string[]>>,
    result: Array<{}>,
    setResult: React.Dispatch<React.SetStateAction<Array<{}>>>
}

function Canvas(props: CanvasProps) {

    const [stage, setStage] = useState('project')
    const data: { [key: string]: (result: Array<{}>, setResult: React.Dispatch<React.SetStateAction<Array<{}>>>, index: number) => React.ReactNode } = {
        project: (result, setResult, index) => < ProjectStage result={result} setResult={setResult} index={index} />,
        match: (result, setResult, index) => < MatchStage result={result} setResult={setResult} index={index} />,
        group: (result, setResult, index) => < GroupStage result={result} setResult={setResult} index={index} />
    }

    function addStage() {
        props.setPipeline(stages => stages.concat(stage))
    }

    function updateStage(e: React.ChangeEvent<HTMLSelectElement>) {
        setStage(e.target.value);
    }

    return (
        <React.Fragment>
            <select name="stages" id="stages" value={stage} onChange={updateStage}>
                {
                    Object.keys(data).map((key, index) => (
                        <option key={index} value={key}>{key}</option>
                    ))
                }
            </select>
            <button onClick={addStage}>Add Stage</button>
            {
                props.pipeline.map((stage, index) => (
                    <React.Fragment key={index}>{data[stage](props.result, props.setResult, index)}</React.Fragment>
                ))
            }
        </React.Fragment>
    )
}

export default Canvas;