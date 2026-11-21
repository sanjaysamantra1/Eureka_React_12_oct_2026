import { useEffect } from "react";

export default function WithLogger(InputComponent) {  // HOC
    return function EnhancedComponent(props) {
        useEffect(() => {
            console.log(`Component ${InputComponent.name} mounted/Updated`);
            return () => {
                console.log(`Component ${InputComponent.name} unmounted.`);
            };
        }, []);
        console.log(`${InputComponent.name} rendered`);
        return <InputComponent {...props} />;
    };
}