import React from "react";

import { Card, Field } from "@huelet/foundation-ui";
import "@huelet/foundation-ui/dist/index.css";

const App = () => {
    return (
        <Card full={true}>
            <div>
                <Field name="hi" prefill="Hello" error="Error" disabled={false} />
            </div>
        </Card>
    );
};

export default App;
