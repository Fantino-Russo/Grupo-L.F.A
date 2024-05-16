import {Text, TextProps} from '@/components/Themed';
type Props = {
    puntos: number;
};
export function Puntaje({puntos} : Props){
    return(
        <Text>Su puntaje es de {puntos}</Text>
    );
}