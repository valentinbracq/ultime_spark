# Configuration des Variables d'Environnement

## 🚀 Build sans Configuration

Le projet peut maintenant être build **sans configurer les variables d'environnement**. Des valeurs par défaut sont définies dans `src/env.ts`.

⚠️ **IMPORTANT** : Ces valeurs par défaut permettent uniquement le build. L'application **ne fonctionnera pas** correctement sans les vraies valeurs.

## 📋 Variables Requises pour la Production

Pour que l'application fonctionne en production, configurez ces variables dans Vercel :

### Base / Blockchain
```
BASE_RPC_URL=https://base-sepolia.g.alchemy.com/v2/YOUR_KEY
BASE_CHAIN_ID=84532
ARK_ADDRESS=0xYourARKTokenAddress
XPREGISTRY_ADDRESS=0xYourXPRegistryAddress
BADGE_ADDRESS=0xYourBadgeNFTAddress
ESCROW_ADDRESS=0xYourGameEscrowAddress
SERVER_PRIVATE_KEY=0xYourPrivateKey
```

### Database & Services
```
DATABASE_URL=postgresql://user:password@host:5432/database
REDIS_URL=redis://default:password@host:port
PORT=3001
```

## 🔧 Configuration sur Vercel

1. Allez dans **Settings** → **Environment Variables**
2. Ajoutez chaque variable avec sa valeur
3. Sélectionnez les environnements (Production, Preview, Development)
4. Sauvegardez et redéployez

## 💡 Recommandations

- **PostgreSQL** : Utilisez Vercel Postgres ou Neon
- **Redis** : Utilisez Upstash Redis (gratuit et optimisé pour serverless)
- **RPC** : Utilisez Alchemy ou Infura pour Base Sepolia
- **Private Key** : Utilisez une clé dédiée au serveur, jamais votre clé personnelle

## 🧪 Test Local

Pour tester localement, créez un fichier `.env` à la racine du projet avec toutes les variables ci-dessus.

```bash
pnpm install
pnpm --filter @spark/api dev
```

