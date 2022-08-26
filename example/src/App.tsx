import React from "react";

import { Button, Card, Drawer } from "@huelet/foundation-ui";
import "@huelet/foundation-ui/dist/index.css";

const App = () => {
    const [opened, setOpened] = React.useState(false);

    return (
        <Card full={true}>
            <Button onPress={() => setOpened(!opened)}>Toggle Toast</Button>
            <Drawer
                heading="Success!"
                opened={opened}
                onClose={() => setOpened(false)}
            >
                Hi
            </Drawer>
        </Card>
    );
};

export default App;
