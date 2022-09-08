import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title> Have you checked out Juul yet? 
It's the freshest ghost client on intent.
You can save your accounts, avoid the bans.
It supports 1.7 through 1.18 servers. 
That means you can play on probably any server you can imagine.
It works on Mac and Linux as well as Windows. 
I know some of you guys can't play ghost clients because they only work on Windows but this one is different.
By default it runs on the intent launcher.
You can also play it in the vanilla Minecraft launcher. 
That means you can use your two-factor Microsoft accounts but if you're fine using the altmanager in Juul that's built in you can play on Mojang and you can play on most Microsoft accounts.
This ghost client is undetectable on basically every server and to be honest you can probably configure it to bypass every server.
It's going to have configs coming soon but everything is in the cloud already.
That means if you play on one computer; log off; join on another computer, you're still going to have all your settings and everything there.

Imma get right into the video, let's go.

ChestAura is working just fine, let's god-bridge over. KillAura. Knocked him off the map.
There's already someone here, and our ESP tells us the chests have been looted, but that doesn't matter. We're gonna kill this dude.
I can turn up my velocity if you want, bro. Alright, man down. Let's god-bridge over. The power of Juul baby. Get 'em both. Janitor, let's win the game!
Let's get some armor up. Man, he's already, he's already up there, I'm ready to fight. Get up to the top. Okay, he thinks he's gonna TNT. You're gonna blow yourself up, bro.
Alright, that's how you do it, bro. Now, there's just one dude left. He's probably trapping, so I'm just going to do what I'm supposed to- oh, he dead.
Alright, we win the game. Juul - KillAura - did pretty good. </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
