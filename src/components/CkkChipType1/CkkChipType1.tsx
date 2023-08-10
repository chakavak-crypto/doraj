import Chip, {ChipProps} from "@mui/material/Chip";
import Avatar, {AvatarClasses} from "@mui/material/Avatar";
import {styled} from "@mui/material/styles";
import {Theme} from "@mui/material";

const StyledChip = styled((props: CkkChipType1Props) => (
    <Chip {...props as ChipProps} />
))(({ theme, beColor }: {theme: Theme, beColor?: 'primary' | 'secondary' | 'success' | 'info' | 'error' | "warning" | "default"} ) => {
    let c;
    if(beColor !== 'default' && beColor !== undefined && theme.palette[beColor] !== undefined && theme.palette[beColor].main !== undefined){
        c = theme.palette[beColor].main
    }else{
        c = beColor;
    }

    c = !c ? theme.palette.grey['600'] : c;
    return {
        borderRadius: '10px',
        borderLeft: `10px solid ${c}`,
        '&>.MuiChip-label': {
           paddingRight: 0,
           marginLeft: '12px',
           marginRight: '12px',
           paddingLeft: '6px',
           borderLeft: `2px solid ${theme.palette.divider}`
        }
    };
})

interface CkkChipType1Props extends Omit<ChipProps, 'color'>{
    color?: "primary" | "secondary" | "success" | "error" | "warning" | "default";
    label: string;
    beColor?: "primary" | "secondary" | "success" | "error" | "warning" | "default";

}
export default function CkkChipType1(props: CkkChipType1Props){
    return (
        <StyledChip
            {...props}
            beColor={props.color}
            color="default"
        />
    );
}