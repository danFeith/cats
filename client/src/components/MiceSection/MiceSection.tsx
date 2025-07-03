import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { memo, useCallback, useEffect, useState } from "react";
import { useCatsContext, type IMouse } from "../../context/CatContext";
import { List } from "immutable";
import { Button } from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMiceSectionStyles } from "./styles";

interface IMiceSectionProps {
    catId: number
}

const ENTER_MOUSE_NAME_MESSAGE = "Enter the mouse's name:"

export const MiceSection = memo(({ catId }: IMiceSectionProps) => {
    const classes = useMiceSectionStyles();
    const { getCatsMice, miceLoading, addMouseToCat } = useCatsContext()
    const [mice, setMice] = useState(List<IMouse>([]));


    useEffect(() => {
        fetchMice()
    }, [])

    const fetchMice = async () => {
        const mice = await getCatsMice(catId)
        setMice(List(mice))
    }

    const handleAddMouse = useCallback(async () => {
        const mouseName = prompt(ENTER_MOUSE_NAME_MESSAGE);
        if (mouseName && mouseName.trim() !== "") {
            await addMouseToCat(catId, mouseName)
            await fetchMice()
        }
    }, [catId]);



    return <div className={classes.miceContainer}>
        {!miceLoading ? <><div className={classes.miceGrid}>
            {mice.count() > 0 ? <>{
                mice.map((mouse, index) => (
                    <div key={index} className={classes.mouseItem}>
                        🐭 {mouse.name}
                    </div>
                ))
            }</> : <div className={classes.noMiceMessage}>No mices for this cat</div>}
        </div>
            <Button
                className={classes.addMouseButton}
                onClick={handleAddMouse}
            >
                <FontAwesomeIcon icon={faPlus} /> Add Mouse
            </Button> </> : <div className={classes.miceLoading} >Loading...</div>}
    </div>
})