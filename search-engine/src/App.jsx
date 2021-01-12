import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Search from "./components/Search";
import Box from '@material-ui/core/Box';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.handleUploadImage = this.handleUploadImage.bind(this);
        this.state = {
            file: null
        }
    }

    handleUploadImage() {

    }


    render() {
        return (
            <React.Fragment>
                <CssBaseline/>
                <Container fixed>
                    <Box
                        height="72vh"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        p={1}>
                        <Search/>
                    </Box>
                </Container>
            </React.Fragment>
        )
    }
}