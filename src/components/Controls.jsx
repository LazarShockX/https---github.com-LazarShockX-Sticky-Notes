import AddButton from './AddButton';
import colors from '../assets/colors.json';
import Color from './Color';
 
const Controls = () => {
    return (
        <div id='controls'>
            <AddButton />
            {colors.map((color) => (
                <Color key={color.colorHeader} color={color} />
            ))}
        </div>
    );
}
 
export default Controls;