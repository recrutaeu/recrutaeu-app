import { themes, useTheme } from "@/contexts/ThemeContext";
import { twMerge } from "tailwind-merge";

const styles = {
    default: {
        description: {
            [themes.DEFAULT]: 'text-neutral-90',
            [themes.DARK]: 'text-neutral-90',
            [themes.LIGHT]: 'text-neutral-0',
        },
        background: {
            [themes.DEFAULT]: 'bg-neutral-10',
            [themes.DARK]: 'bg-neutral-0',
            [themes.LIGHT]: 'bg-neutral-90',
        },
    },
};
const ProgressBar = (props) => {

    const { theme } = useTheme();
    const style = styles['default'];
    const { bgcolor, completed, label } = props;

    const containerStyles = {
        height: 20,
        width: '100%',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        marginBottom: 50
    }

    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right'
    }

    const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
    }

    return (
        <div>
            <p
                className={twMerge(
                    'w-full text-sm font-light mt-2 lg:text-base',
                    style.description[theme],
                )}
            >{label}</p>
            <div style={containerStyles}>
                <div style={fillerStyles}>
                    <span style={labelStyles}>{`${completed}%`}</span>
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;