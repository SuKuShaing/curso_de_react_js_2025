type ButtonProps = {
    onclick: () => void;
    label: string | number;
};

const ButtonTs = ({ onclick, label }: ButtonProps) => {
    return (
        <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={onclick}>{label}</button>);
};

export default ButtonTs;