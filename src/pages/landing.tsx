import ClerkUserHeader from "@/components/clerkUserHeader";
import {
    Autocomplete,
    AutocompleteSection,
    AutocompleteItem,
    Button
  } from "@nextui-org/react";
import { useState } from "react";

const Landing = () => {

    let [languages, setLanguages] = useState([
        {value: 1, label: 'Spanish'},
        {value: 2, label: 'Portuguese'},
        {value: 3, label: 'French'}
      ]);

    return(
        <>
            <ClerkUserHeader />
            <div className="w-full h-screen flex flex-col justify-center items-center gap-4">
                <div className="flex flex-row justify-center items-center w-3/4 gap-2">
                    <h2>Hi I'm Angus and I'd like to learn</h2>
                    <Autocomplete
                        defaultItems={languages}
                        placeholder="Search a language"
                        className="max-w-xs"
                        >
                        {(language) => <AutocompleteItem key={language.value}>{language.label}</AutocompleteItem>}
                    </Autocomplete>
                </div>
                <div>
                    <Button className="blue">Submit</Button>
                </div>
                
            </div>
        </>
    )
}
export default Landing;