import pyttsx3
engine = pyttsx3.init()
voices = engine.getProperty('voices')
for voice in voices:
    print("Voice:", voice.name)
    print(" - ID:", voice.id)
    print(" - Languages:", voice.languages)
    print(" - Gender:", voice.gender)
    print(" - Age:", voice.age)
# Remplacez 'ID_de_la_voix' par l'ID de la voix masculine que vous souhaitez utiliser
engine.setProperty(' Microsoft David Desktop - English (United States)', 'HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Speech\Voices\Tokens\TTS_MS_EN-US_DAVID_11.0')
text = "Bonjour, comment ça va ?"
engine.say(text)
engine.runAndWait()
