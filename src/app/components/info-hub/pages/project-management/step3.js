import styles from "./step3.css"
import Navbar from "../../../../components/navbar/navbar";
import Button from '../../../../components/button/button';
import Bubble from "../../../../components/bubble/bubble";
import Heading from "../../../../components/info-hub/heading"
import Body from "./body";

export default function Step3() {
    var itemOne = {
        type: "paragraph",
        content: "If we think that your project idea might be a good fit, we will ask you for more information. A form  you can use is attached at the end of this document. Whether or not you use the form, please include: "
    };

    var itemTwo = {
        type: "bullet-point",
        content: "Project leader's name, address, phone, and (if available) email"
    };

    var itemThree = {
        type: "bullet-point",
        content: "Name of fiscal administrator (the NGO or individual who will manage project funds)"
    }
    
    var itemFour = {
        type: "bullet-point",
        content: "Estimated total cost of project, in local currency"
    }
    
    var itemFive = {
        type: "bullet-point",
        content: "The protected area’s size and type (marine, terrestrial, and/or mangroves)"
    }
    
    var itemSix = {
        type: "bullet-point",
        content: "How long the area will be protected (at least 15 years is best)"
    }
    
    var itemSeven = {
        type: "bullet-point",
        content: "Confirmation of ownership of protected area and any other land used for the project"
    }
    
    var itemEight = {
        type: "bullet-point",
        content: "Detailed information about how the community will protect the proposed protected area"
    }
    
    var itemNine = {
        type: "bullet-point",
        content: "Map showing where any structure will be built or installed"
    }
    
    var itemTen = {
        type: "bullet-point",
        content: "Photographs of the area, including both the community and the proposed protected area"
    }
    
    var itemEleven = {
        type: "bullet-point",
        content: "Number of people in the community"
    }
    
    var itemTwelve = {
        type: "bullet-point",
        content: "Other sources of project funding, if any (if we are not the only funder, we need to know)"
    }
    
    var itemThirteen = {
        type: "bullet-point",
        content: "List of threatened or endangered species in the area that will be protected, if any"
    }
    
    var itemFourteen = {
        type: "bullet-point",
        content: "Any conflicts of interest"
    }

    var itemFifteen = {
        type: "paragraph",
        content: "Look carefully at the proposed budget. Is it realistic? Are any important items missing? Are the costs of supplies and transportation accurate? As part of your review, you may need to confirm costs with  suppliers and service providers. We understand that costs may go up or down slightly, due to  exchange rates and inflation. However, it is not acceptable to submit a budget that significantly  underestimates actual costs."
    }

    var itemSixteen = {
        type: "paragraph",
        content: "We will use this information to prepare a proposal and present it to the board at the next meeting.  After the meeting, we will let you know promptly whether or not the board approved the project."
    }

    var textList = [itemOne, itemTwo, itemThree, itemFour, itemFive, itemSix, itemSeven, itemEight,
         itemNine, itemTen, itemEleven, itemTwelve, itemThirteen, itemFourteen, itemFifteen, itemSixteen]

    return (
        <div>
            <Navbar/>
            <div className="page-wrapper">
                <Heading text="Step 3" buttonText="edit"/>

                <div>
                    <Body textList={textList} title="Step 3: Send Us Detailed Information"/>
                </div>

                <div className="button-wrapper">
                    <Button color="blue" size="small" text="back"/>
                    <Button color="blue" size="small" text="next"/>
                </div>
            </div>
        </div>
    );
}