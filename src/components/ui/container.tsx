interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
    return (
        <div className="mx-auto w-full max-w-screen-4/5">
            {children}
        </div>
    );
};

export default Container;
