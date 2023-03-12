
import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import { grey } from "@material-ui/core/colors";
import Divider from "@material-ui/core/Divider";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import PageTitle from "../../components/PageTitle";
import {Grid} from "@material-ui/core";


export default  function Forms() {
    const styles = {
        toggleDiv: {
            marginTop: 20,
            marginBottom: 5
        },
        toggleLabel: {
            color: grey[400],
            fontWeight: 100
        },
        buttons: {
            marginTop: 30,
            float: "right"
        },
        saveButton: {
            marginLeft: 5
        }
    };

    return (
        <>
            <PageTitle title="New Task" />
            <Grid container spacing={4}>
                <Grid item xs={12}>
            <form>
                <TextField
                    hintText="Title"
                    label="Title"
                    fullWidth={true}
                    margin="normal"
                />
                <TextField
                    hintText="Description"
                    label="Description"
                    fullWidth={true}
                    margin="normal"
                />

                <FormControl fullWidth={true}>
                    <InputLabel htmlFor="Status">Status</InputLabel>
                    <Select
                        inputProps={{
                            name: "Status",
                            id: "Status"
                        }}
                        fullWidth={true}
                        margin="normal"
                    >


                        <MenuItem value={"Open"}>Open</MenuItem>
                        <MenuItem value={"In work"}>In work</MenuItem>
                        <MenuItem value={"Done"}>Done</MenuItem>
                    </Select>
                </FormControl>

                <TextField
                    id="expirationDate"
                    label="Expiration Date"
                    type="date"
                    InputLabelProps={{
                        shrink: true
                    }}
                    margin="normal"
                    fullWidth={true}
                />


                <Divider />

                <div style={styles.buttons}>
                    <Link to="/">
                        <Button variant="contained">Cancel</Button>
                    </Link>

                    <Button
                        style={styles.saveButton}
                        variant="contained"
                        type="submit"
                        color="primary"
                    >
                        Save
                    </Button>
                </div>
            </form>
                </Grid>

            </Grid>
        </>
    );
};

