# Text-Box

## Downloading
Clone the repository with `git clone https://github.com/alexankitty/Text-Box` and then move it where ever you want.
Alternatively, download the latest zip: https://github.com/alexankitty/Text-Box/releases

## Usage

This simple "web widget" allows you to make text appear in an RPG style text box. It's currently stylized for how my stream looks, but the effect can be changed by changing 'Border New.png' to whichever border you want stored in the /res folder, and 'Sprite Print colored.png' for the decorations. When changing the border and decorations, make sure you also modify their position and sizing to fit correctly if they are of a different size. (.borderwrap for the border; before and after pseudo elements for the decorations)

Append the following to the URL to make it type whatever you want: textbox.html?text=I'm test content&size=55&color=white

Change out the size and color to match however you want it to display for that instance. (Color can be anything within the CSS spec, size is specifically pixels)

If you want to change the font, switch 'Didact Gothic' in textbox.css under html, body to whichever google font you want. https://fonts.google.com
Be sure to add any import directives you might need to the html file.

## To do:
Support multiline writing (half way implemented)
