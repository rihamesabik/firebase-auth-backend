#!/bin/bash

echo "🔄 Déploiement en cours sur le cluster K3s local..."
kubectl apply -f .
echo "✅ Déploiement terminé !"
