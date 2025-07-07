import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useCallback, useEffect, useState } from "react";
import { useCatsContext, type IMouse } from "../../context/CatContext";
import { List } from "immutable";
import { Button } from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMiceSectionStyles } from "./styles";
import { MiceList } from "../MiceList/MiceList";

interface IMiceSectionProps {
    catId: number
}

const ENTER_MOUSE_NAME_MESSAGE = "Enter the mouse's name:"

export const MiceSection = ({ catId }: IMiceSectionProps) => {
    const classes = useMiceSectionStyles();
    const [mice, setMice] = useState(List<IMouse>([]));
    const { getCatsMice, miceLoading, addMouseToCat } = useCatsContext()

    useEffect(() => {
        fetchMice()
    }, [])

    const fetchMice = useCallback(async () => {
        const mice = await getCatsMice(catId)
        setMice(List(mice))
    }, [catId, getCatsMice])

    const handleAddMouse = useCallback(async () => {
        const mouseName = prompt(ENTER_MOUSE_NAME_MESSAGE);
        if (mouseName && mouseName.trim() !== "") {
            await addMouseToCat(catId, mouseName)
            await fetchMice()
        }
    }, [catId, fetchMice, addMouseToCat]);



    return <div className={classes.miceContainer}>
        {!miceLoading ? <>
            <MiceList mice={mice} />
            <Button className={classes.addMouseButton} onClick={handleAddMouse}>
                <FontAwesomeIcon icon={faPlus} /> Add Mouse
            </Button>
        </> : <div className={classes.miceLoading} >Loading...</div>}
    </div>
}