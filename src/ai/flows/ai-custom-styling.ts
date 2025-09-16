'use server';

/**
 * @fileOverview An AI agent that generates CSS or theme configurations based on styling instructions for different website sections.
 *
 * - generateStyling - A function that generates styling configurations based on input instructions.
 * - StylingInput - The input type for the generateStyling function.
 * - StylingOutput - The return type for the generateStyling function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const StylingInputSchema = z.object({
  section: z.string().describe('The specific section of the website to style (e.g., consulting, e-commerce).'),
  instructions: z.string().describe('Detailed styling instructions for the section, including colors, typography, and layout preferences.'),
  format: z.enum(['css', 'theme-config']).describe('The desired output format: CSS or a theme configuration object.'),
});
export type StylingInput = z.infer<typeof StylingInputSchema>;

const StylingOutputSchema = z.object({
  stylingConfig: z.string().describe('The generated styling configuration in the specified format.'),
});
export type StylingOutput = z.infer<typeof StylingOutputSchema>;

export async function generateStyling(input: StylingInput): Promise<StylingOutput> {
  return generateStylingFlow(input);
}

const stylingPrompt = ai.definePrompt({
  name: 'stylingPrompt',
  input: {schema: StylingInputSchema},
  output: {schema: StylingOutputSchema},
  prompt: `You are an expert front-end developer skilled in creating consistent and visually appealing designs.

  Based on the provided styling instructions, generate a styling configuration for the specified website section.

  Section: {{{section}}}
  Instructions: {{{instructions}}}
  Format: {{{format}}}

  Ensure the generated configuration adheres to modern web development best practices and is compatible with Next.js.

  Styling Configuration:`, 
});

const generateStylingFlow = ai.defineFlow(
  {
    name: 'generateStylingFlow',
    inputSchema: StylingInputSchema,
    outputSchema: StylingOutputSchema,
  },
  async input => {
    const {output} = await stylingPrompt(input);
    return output!;
  }
);
