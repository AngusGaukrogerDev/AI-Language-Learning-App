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
        <div className="bg-background ">
            <ClerkUserHeader />
            <div className="w-full h-screen flex flex-col justify-center items-center gap-4 bg-background">
                <div className="grid grid-cols-2 grid-rows-1 place-items-center items-center gap-3">
                    <h4 className="h-full w-full justify-self-center"> I'd like to learn</h4>
                    <Autocomplete
                        defaultItems={languages}
                        placeholder="Search a language"
                        className="w-64 h-full"
                        >
                        {(language) => <AutocompleteItem key={language.value}>{language.label}</AutocompleteItem>}
                    </Autocomplete>
                </div>
                <div>
                    <Button className="bg-primary">Submit</Button>
                </div>
                
            </div>
        </div>
    )
}
export default Landing;