#!/bin/bash

echo "🔄 Déploiement en cours sur le cluster K3s local..."
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
echo "✅ Déploiement terminé !"
