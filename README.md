# Lockpik

> Disclaimer: I haven't done much fact checking, this might all be totally useless... But let's assume it's not.

> Second disclaimer: If it actually does work, don't go travelling the world just to break into people's houses. Please.

Lockpik is a tool for finding locks around the world that your key unlocks. It uses Node.js, jQuery and Redis.

## Background

Many (but not all) lock manufacturers print a code onto their locks and keys. If a key has the same code as a lock, it will open it. Due to a lack of combinations, the manufacturers also reuse the same locks in different parts of the world, meaning that totally unrelated people from different parts of the globe may have the same keys!

## How it works

Lockpik totally relies on people posting the codes and locations of locks. This is potentially the biggest downfall, but whatever. Users can then type in the code etched onto their own key and are presented with a map displaying the locations of all the locks that their key can unlock.
