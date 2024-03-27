![logo](logo.png)

---

#### Welcome to EasyAddon's GitHub. This project aims to simplify add-on creation by offering a comprehensive and functional framework with development packages such as TypeScript for scripting.

---
## installation
```SHELL
git clone git@github.com:Refaltor77/template_addon_mcpe.git addonProject/
npm install
```

### Dependency (regolith) for compiling addon
https://github.com/Bedrock-OSS/regolith/releases/tag/1.2.0

---
## Run addon
````SHELL 
npm run build
````
This command will **automatically** compile the add-on by transpiling **TypeScript** scripting into **JavaScript**, and it will also place your add-on in the ``com.mojang/`` folder of your game.

---

### features
#### Player :
``PlayerInventory ✅``<br>
``PlayerArmorInventory ✅``<br>
``PlayerAddEffectEvent ✅``<br>
``PlayerChangeWorldEvent ✅``<br>
``PlayerDamageEvent ✅``<br>
``PlayerDeathEvent ✅``<br>
``PlayerInteractEvent ✅``<br>
``PlayerJoinEvent ✅``<br>
``PlayerQuitEvent ✅``<br>
``PlayerChangeArmorEvent 🟥``<br>
``PlayerJumpEvent 🟥``<br>
``playerMoveEvent 🟥``<br>
#### Entity :
``EntityAddEffectEvent ✅``<br>
``EntityDamageEvent ✅``<br>
``EntityDeathEvent ✅``<br>
``EntityExplodeEvent ✅``<br>
``EntitySpawnEvent ✅``<br>
``EntityLoadEvent 🟥``<br>
``EntityPlaySoundEvent 🟥``<br>
``EntityAttackEvent 🟥``<br>
#### Blocks :
``BlockBreakEvent ✅``<br>
``BlockPlaceEvent ✅``<br>
``ButtonPushEvent ✅``<br>
#### Projectiles :
``ProjectileHitEntityEvent ✅``<br>