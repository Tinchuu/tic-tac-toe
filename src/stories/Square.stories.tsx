import Square from "../components/Square";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title: '',
    component: Square,
    argTypes: {
        onClick: {action: true}
    }
} as ComponentMeta<typeof Square>;


const Template: ComponentStory<typeof Square> = (args) => <Square {...args}/>

export const Default = Template.bind({});

Default.play = async ({ args, canvasElement }) => {
    
};