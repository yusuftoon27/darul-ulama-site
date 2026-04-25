# Plan: Update Islamic Quote Content

The Islamic quote in the footer has been updated across all supported languages to "Whoever guides to good will have a reward like the one who does it."

## Completed Steps
1.  **Read and Parse Translation Files**: Verified current quote keys in `en.json`, `ar.json`, `am.json`, `om.json`, and `so.json`.
2.  **Update Quotes**: Replaced the previous quote with the new one and removed unnecessary single quotes from inside the JSON values for a cleaner display.
    - **English**: "Whoever guides to good will have a reward like the one who does it."
    - **Arabic**: "مَنْ دَلَّ عَلَى خَيْرٍ فَلَهُ مِثْلُ أَجْرِ فَاعِلِهِ"
    - **Amharic**: "ወደ መልካም ነገር የመራ ሰው ያንኑ የሰራውን ያህል ምንዳ ያገኛል፡፡"
    - **Oromo**: "Namni gara waan gaariitti qajeelche badhaasa akka nama sun hojjatee ni qabaata."
    - **Somali**: "Qofkii khayr dadka ku hanuuniya wuxuu leeyahay ajir la mid ah kan sameeyey."
3.  **Verification**: Called `validate_build` to ensure the project remains stable.

## Expected Result
The footer on all pages now displays the updated Islamic quote in the selected language.